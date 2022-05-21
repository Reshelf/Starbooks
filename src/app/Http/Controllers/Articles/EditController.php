<?php

namespace App\Http\Controllers\Articles;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Request;

class EditController extends Controller
{
    /**
     * 記事の編集
     * ポリシー(src/app/Policies/ArticlePolicy.php)
     */
    public function __invoke(Article $article, Request $request)
    {
        $this->authorize('update', $article);

        // if ($request->user()->cannot('article-policy', $article)) {
        //     abort(403);
        // }

        // $tagNames = $article->tags->map(function ($tag) {
        //     return ['text' => $tag->name];
        // });

        // $allTagNames = Tag::all()->map(function ($tag) {
        //     return ['text' => $tag->name];
        // });

        return view('articles.edit', [
            'article' => $article,
            // 'tagNames' => $tagNames,
            // 'allTagNames' => $allTagNames,
        ]);
    }
}
