<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TimingPoint extends Model
{	
	protected $fillable = array('description', 'point_id');	

    public function athletes()
    {
        return $this->belongsToMany('App\Athlete', 'athlete_timing_point', 'timing_point_id', 'athlete_id')->withPivot('time');
    }


}
