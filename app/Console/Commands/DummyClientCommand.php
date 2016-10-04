<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Redis;
use App\Socket;
use App\TimingPoint;
use App\Athlete;

class DummyClientCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'dummyclient:send';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Send dummy data to server';


    protected function createAthlete($athlete_data, $name) {
        $athlete = new Athlete;
        $athlete->name = $name;
        $athlete->starting_number = $athlete_data['starting_number'];
        $athlete->chip_id = $athlete_data['chip_id'];
        $athlete->save();
        return $athlete;
    }

    protected function createTimingPoint($athlete, $timingPointID, $time) {
        $athlete->timing_points()->attach($timingPointID, ['time'=>$time]);
    }

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {           
        $dummy_file = require env('DUMMY_DATA');
        $athletes = $dummy_file['athletes'];
        foreach($athletes as $name => $athlete_data) {
            $athlete = Athlete::where('name', $name)->first();
            if (!$athlete['id']) {
                $athlete = $this->createAthlete($athlete_data, $name);
            }
            foreach($athlete_data['timing_points'] as $timing_point => $time) {
                $tpoint = $athlete->timing_points()->where('timing_point_id', $timing_point)->first();
                if (!$tpoint) {
                    $this->createTimingPoint($athlete, $timing_point, $time);
                }
            }       
        }
        $socket = new Socket;
        $socket->postMessage('Athletes updated');
    }
}
