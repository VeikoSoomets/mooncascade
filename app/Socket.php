<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Redis;

class Socket extends Model
{		

    public function postMessage($message)
    {
        $redis = Redis::connection();
        $redis->publish('updates', $message);
    }
}
