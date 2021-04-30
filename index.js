const fInput = document.getElementById('fileInput');
const ul = document.querySelector('ul');


fInput.addEventListener('change', (e) => {
    ul.innerHTML = '';
    const fList = Array.from(e.target.files);

    fList.forEach((f, index) => {
        let li = ul.appendChild(document.createElement('li'));
        li.dataset.index = index;
        let img = li.appendChild(document.createElement('img'));
        img.src = URL.createObjectURL(f);
        let p = li.appendChild(document.createElement('p'));
        let btn = li.appendChild(document.createElement('button'));
        btn.innerText = 'Delete';

        btn.addEventListener('click', () => {
            fList.splice(index, 1);
            URL.revokeObjectURL(f);
            const elem = document.querySelector(`[data-index='${index}']`);
            elem.remove();

        });
        p.innerText = f.name;
    });
    fInput.value = null;
});