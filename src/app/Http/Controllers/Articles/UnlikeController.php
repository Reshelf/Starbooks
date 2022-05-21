<?php

namespace App\Http\Controllers\Articles;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Http\Requests\ArticleRequest;
use Illuminate\Http\Request;

class UnlikeController extends Controller
{
    /**
     * 記事へのいいね解除
     * ポリシー(src/app/Policies/ArticlePolicy.php)
     */
    public function __invoke(Request $request, Article $article)
    {
        $this->authorize('update', $article);

        $article->likes()->detach($request->user()->id);

        return [
            'id' => $article->id,
            'countLikes' => $article->count_likes,
        ];
    }
}
