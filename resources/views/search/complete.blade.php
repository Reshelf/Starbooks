@extends('app')

@section('title', '完結作品 | Starbooks')

@section('content')
    @include('_patials._nav', [
        'ranking' => false,
        'todays_new' => false,
        'like' => false,
        'following' => false,
    ])
    <div class="relative bg-[#0A2140] dark:bg-dark bg-opacity-50 flex w-full mx-auto py-12 items-center">
        <div class="max-w-6xl w-full mx-auto text-white font-semibold flex items-center">
            <h2 class="text-3xl">「完結」している作品の一覧</h2>
        </div>
    </div>

    <div class="flex max-w-6xl w-full mx-auto mt-8 pt-8 px-12 md:px-0 justify-center">
        <div class="w-full mx-12">
            <div class="w-full flex flex-wrap justify-start">
                @foreach ($books as $book)
                    @include('users._patials.card')
                @endforeach
            </div>
        </div>
    </div>

    @include('_patials._footer')
@endsection