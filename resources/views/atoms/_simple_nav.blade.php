<div class="bg-white dark:bg-dark sticky top-0 z-40 w-full flex-none lg:z-20 border-b border-ddd dark:border-dark">
    <div class="max-w-8xl mx-auto">
        <div class="py-4 md:border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0">
            <div class="relative flex items-center">

                {{-- ロゴ --}}
                @include('atoms.nav.logo')

                <div class="hidden lg:flex items-center ml-auto">
                    <nav class="text-sm">
                        <div class="flex items-center">
                            @guest
                                @include('auth._login')
                            @endguest
                            @auth
                                <div class="flex items-center h-full mr-8">
                                    <create-modal>
                                        <template #header>新しく作品を追加する</template>

                                        {{-- エラー文 --}}
                                        @include('atoms._error_card_list')

                                        <form method="POST" action="{{ route('book.store') }}" enctype="multipart/form-data">
                                            @include('books.atoms.form')
                                            <div class="w-full flex justify-end"><button
                                                    onclick="this.disabled='disabled'; this.form.submit();" type="submit"
                                                    class="btn">投稿する</button></div>
                                        </form>
                                    </create-modal>
                                </div>
                                @include('atoms.nav.user_modal')
                            @endauth
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</div>