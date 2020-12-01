(function main() {
    document.addEventListener('DOMContentLoaded', DOMContentLoaded);

    function DOMContentLoaded() {
        document.querySelectorAll('.js-show-form').forEach(value => {
            value.addEventListener('click', showForm);
        });
    }

    function showForm(MouseEvent) {
        let node = document.querySelector('#' + MouseEvent.target.getAttribute('name'));
        if (node.classList.contains('hidden')) {
            node.classList.remove('hidden');
        } else {
            node.classList.add('hidden');
        }
    }
})();