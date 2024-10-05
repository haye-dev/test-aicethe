document.querySelector('.contact-left').addEventListener('submit', async function (event) {
    event.preventDefault(); // Ngăn chặn hành động gửi form mặc định

    const form = event.target;
    const formData = new FormData(form); // Lấy dữ liệu form

    try {
        // Gửi dữ liệu tới Web3Forms API
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        });

        // Kiểm tra phản hồi từ API
        if (response.ok) {
            // Điều hướng tới trang thankyou.html nếu thành công
            window.location.href = 'thankyou.html'; // Điều hướng tới thankyou.html
        } else {
            const errorData = await response.json();
            console.error('Error from API:', errorData);
            alert('There was an error submitting the form. Please try again.');
        }
    } catch (error) {
        console.error('Network or connection error:', error);
        alert('An error occurred. Please check your connection and try again.');
    }
});
