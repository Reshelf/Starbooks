<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Comment extends Model
{
    protected $fillable = [
        'comment',
        'episode_id',
        'user_id',
    ];

    /*
    |--------------------------------------------------------------------------
    | エピソード　　：　　リレーション
    |--------------------------------------------------------------------------
    */
    public function episode(): BelongsTo
    {
        return $this->belongsTo('App\Models\Episode');
    }

    /*
    |--------------------------------------------------------------------------
    | ユーザー　　：　　リレーション
    |--------------------------------------------------------------------------
    */
    public function user(): BelongsTo
    {
        return $this->belongsTo('App\Models\User');
    }

    /*
    |--------------------------------------------------------------------------
    | リプライ　
    |--------------------------------------------------------------------------
    */
    public function replies()
    {
        return $this->hasMany('App\Models\Comment', 'parent_id');
    }
}
