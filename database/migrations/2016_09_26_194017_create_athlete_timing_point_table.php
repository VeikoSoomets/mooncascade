<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAthleteTimingPointTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('athlete_timing_point', function (Blueprint $table) {
            $table->integer('athlete_id')->unsigned()->index();
            $table->foreign('athlete_id')->references('id')->on('athletes')->onDelete('cascade');
            $table->integer('timing_point_id')->unsigned()->index();            
            $table->dateTime('time');
            $table->timestamps();
        });

        Schema::table('athlete_timing_point', function (Blueprint $table) {
            $table->foreign('timing_point_id')->references('point_id')->on('timing_points');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('athlete_timing_point');
    }
}
