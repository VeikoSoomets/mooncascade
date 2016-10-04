<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\TimingPoint;

class TimingPointsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {   
        $timing_point = new TimingPoint(['description' => 'First Timing Point','point_id'=>1]);
        $timing_point->save();
        $timing_point2 = new TimingPoint(['description' => 'Second Timing Point','point_id'=>2]);
        $timing_point2->save();
    }
}
