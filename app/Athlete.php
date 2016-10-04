<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Athlete extends Model
{	
	protected $fillable = array('start_number', 'name', 'chip_id');	

    public function timing_points()
    {
        return $this->belongsToMany('App\TimingPoint', 'athlete_timing_point','athlete_id','timing_point_id')->withPivot('time');
    }
}
