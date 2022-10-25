<?php

namespace App\Http\Controllers\Books\Episode;

use App\Http\Controllers\Controller;
use App\Models\Book;
use App\Models\Episode;
use Illuminate\Http\Request;
// メール
use Illuminate\Support\Facades\Mail;
use App\Mail\books\episodes\AddNewEpisodeMail;

class StoreController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    /*
    |--------------------------------------------------------------------------
    | エピソードの保存
    |--------------------------------------------------------------------------
    */
    public function __invoke(Request $request, Episode $episode)
    {
        $book = Book::where('id', $request->book_id)->first(); // OK
        $episode->book_id = $request->book_id; // OK

        // エピソードの話数
        $episode->number = $episode->where('book_id', $request->book_id)->count() + 1;
        $episode->save();

        // 今日の新作に追加
        $book->is_new = true;
        $book->save();

        // 二重送信防止
        $request->session()->regenerateToken();

        // 作品をお気に入りに追加してる人に新着エピソードのメール通知
        $book_likes_users = $book->likes()->where('book_id', $book->id)->get();
        if ($book_likes_users->count() > 0) {
            $mailData = [
                'book' => $book,
                'episodeNumber' => $episode->number,
                'user' => $request->user(),
                'bookLikesUserEmails' => $book_likes_users->pluck("email")
            ];
            Mail::send(new AddNewEpisodeMail($mailData));
        };

        return back();
    }
}
