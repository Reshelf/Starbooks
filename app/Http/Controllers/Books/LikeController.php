<?php

namespace App\Http\Controllers\Books;

use App\Http\Controllers\Controller;
use App\Models\Book;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Mail;
use App\Mail\books\LikedBookMail;

class LikeController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    /*
    |--------------------------------------------------------------------------
    | 作品をお気に入りに追加する
    |--------------------------------------------------------------------------
    */
    public function __invoke(Request $request, Book $book)
    {
        // 作者以外のユーザー
        if ($book->user->id !== $request->user()->id) {
            $book->likes()->detach($request->user()->id);
            $book->likes()->attach($request->user()->id);

            // お気に入りされたらメールを送る
            $email = $book->user->email;
            Mail::to($email)->send(new LikedBookMail($request->user()));
        }

        return [
            'id' => $book->id,
            'countLikes' => $book->count_likes,
        ];
    }
}