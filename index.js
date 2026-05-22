document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('volunteer-form');
    const thanksMessage = document.getElementById('form-thanks');

    if (form) {
        form.addEventListener('submit', (e) => {
            // 通常のページ遷移をストップ
            e.preventDefault();

            // ★ここに通知を受け取りたいメールアドレスを入力してください
            const YOUR_EMAIL = 'yoshimoto08040804@gmail.com'; 

            // 連打防止のためボタンを無効化
            const submitBtn = form.querySelector('.submit-btn');
            submitBtn.disabled = true;
            submitBtn.textContent = '送信中...';

            // フォームデータの収集
            const formData = new FormData(form);

            // FormSubmitのAJAXエンドポイントへ非同期送信
            fetch(`https://formsubmit.co/ajax/${YOUR_EMAIL}`, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    // 送信成功：フォームを消してサンクスメッセージを表示
                    form.style.display = 'none';
                    thanksMessage.style.display = 'block';
                    thanksMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                } else {
                    throw new Error('送信エラー');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('ごめんなさい、送信中にエラーが発生しました。時間をおいてもう一度お試しください。');
                // エラー時はボタンを元に戻す
                submitBtn.disabled = false;
                submitBtn.textContent = 'メッセージを送る';
            });
        });
    }

    // ナビゲーションのなめらかなスクロール設定
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
