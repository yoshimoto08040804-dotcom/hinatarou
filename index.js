document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('volunteer-form');
    const thanksMessage = document.getElementById('form-thanks');

    if (form) {
        form.addEventListener('submit', (e) => {
            // 通常のページ遷移（送信）をストップ
            e.preventDefault();

            // 入力された値を取得（将来的にサーバーへ送信する際に使用できます）
            const facilityName = document.getElementById('facility-name').value;
            const clientName = document.getElementById('client-name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // コンソールで確認用（動作テスト用）
            console.log('送信された内容:', { facilityName, clientName, email, message });

            // フォームをフェードアウトして、感謝メッセージを表示する簡易演出
            form.style.display = 'none';
            thanksMessage.style.display = 'block';

            // サンクスメッセージの位置までなめらかにスクロール
            thanksMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }

    // ナビゲーションのリンクをクリックした際、スマホなどでも確実に滑らかにスクロールさせる設定
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});
