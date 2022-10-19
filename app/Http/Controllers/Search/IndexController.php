<?php

namespace App\Http\Controllers\Search;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;

use App\Models\Book;

class IndexController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        if (Auth::user()) {
            // 今日の新作
            $books = Book::where('is_new', true)->orderBy('created_at')->get();
            return view('search.todays_new.index', compact('books'));
        }

        // ランキング 人気順
        $likes = Book::withCount('likes')->orderBy('likes_count', 'desc')->take(500)->get();
        // お気に入り数が0の作品は除く
        $books = $likes->where('likes_count', '>', 0);
        return view('search.ranking', compact('books'));
    }
}
