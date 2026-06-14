document.addEventListener("DOMContentLoaded", function () {
    const fileInput = document.getElementById('file-upload');
    const previewContainer = document.getElementById('preview-container');

    if (fileInput && previewContainer) {
        fileInput.addEventListener('change', function (event) {
            const files = event.target.files;


            previewContainer.innerHTML = '';

            if (files.length > 0) {
                previewContainer.classList.remove('d-none');

                Array.from(files).forEach(file => {
                    if (file.type.startsWith('image/')) {
                        const reader = new FileReader();

                        reader.onload = function (e) {

                            const itemContainer = document.createElement('div');
                            itemContainer.className = "cp-preview-item m-2";

                            const img = document.createElement('img');
                            img.src = e.target.result;
                            img.alt = "Previsualización";
                            img.className = "img-fluid rounded-2 border";
                            img.style.maxHeight = "120px";
                            img.style.borderColor = "var(--cp-border)";

                            const deleteBtn = document.createElement('button');
                            deleteBtn.type = "button";
                            deleteBtn.className = "cp-btn-delete-img";
                            deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

                            deleteBtn.addEventListener('click', function () {
                                itemContainer.remove();

                                if (previewContainer.children.length === 0) {
                                    previewContainer.classList.add('d-none');
                                    fileInput.value = ""; // Reseteamos el input file
                                }
                            });

                            itemContainer.appendChild(img);
                            itemContainer.appendChild(deleteBtn);

                            previewContainer.appendChild(itemContainer);
                        }
                        reader.readAsDataURL(file);
                    }
                });
            } else {
                previewContainer.classList.add('d-none');
            }
        });
    }
});

