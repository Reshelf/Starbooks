@extends('app')

@section('title', 'ご利用ガイド - Starbooks')

@section('content')
    @include('_patials._help_nav')

    <div class="w-full bg-[#0A2140] bg-opacity-50 h-[110px] flex items-center justify-center">

    </div>
    <div class="w-full bg-f8 dark:bg-dark p-8">
        <div class="max-w-6xl mx-auto">
            <div
                class="bg-white dark:bg-dark-1 p-12 rounded-[3px] border-2 border-transparent hover:text-primary hover:border-primary cursor-pointer">
                <h3 class="tracking-widest text-[16px] font-semibold">Starbooksについて</h3>
                <div class="mt-2">初めての方はこちらから</div>
            </div>

            <div class=" flex items-center my-8">
                <div
                    class="w-1/3 bg-white dark:bg-dark-1 p-12 rounded-[3px] border-2 border-transparent hover:text-primary hover:border-primary cursor-pointer">
                    <h3 class="tracking-widest text-[16px] font-semibold">よくあるご質問</h3>
                    <div class="mt-2">設定の変更方法など、わからないことがある場合はこちら</div>
                </div>
                <div
                    class="mx-8 w-1/3 bg-white dark:bg-dark-1 p-12 rounded-[3px] border-2 border-transparent hover:text-primary hover:border-primary cursor-pointer">
                    <h3 class="tracking-widest text-[16px] font-semibold">創作について</h3>
                    <div class="mt-2">作者の方、作品をこれから投稿したい方はこちらから</div>
                </div>
                <div
                    class="min-h-[174px] w-1/3 bg-white dark:bg-dark-1 p-12 rounded-[3px] border-2 border-transparent hover:text-primary hover:border-primary cursor-pointer">
                    <h3 class="tracking-widest text-[16px] font-semibold">お問い合わせ</h3>
                    <div class="mt-2">問題が解消しない場合はこちらから</div>
                </div>
            </div>
        </div>
    </div>

    @include('_patials._footer')
@endsection
