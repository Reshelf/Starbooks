@extends('app')

@section('title', '利用規約')

@section('content')
    @include('_patials._nav', ['tab' => 0]))

    <div class="container my-8">
        <h2 class="text-3xl font-semibold">利用規約</h2>
    </div>

    @include('_patials._footer')
@endsection
