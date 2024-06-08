
const blocks = document.querySelectorAll('.dark-block');
const header = document.querySelectorAll('.header');

checkChildrenInParents(blocks, header, "header");

window.addEventListener('scroll', function () {
    checkChildrenInParents(blocks, header, "header");
})

function checkChildrenInParents(parents, children, className) {


    children.forEach(child => {
        let isInsideAtLeastOneParent = false;
        parents.forEach(parent => {
            if (isWithinVerticalBounds(parent, child)) {
                isInsideAtLeastOneParent = true;
            }
        });
        if ( isInsideAtLeastOneParent ) {
            child.classList.add(className +'_white');
        }
        else {
            child.classList.remove(className + '_white');
        }
    });

}

function isWithinVerticalBounds(parent, child) {
    const parentRect = parent.getBoundingClientRect();
    const childRect = child.getBoundingClientRect();



    // Проверяем, что верхняя граница child не выше верхней границы parent
    // и что нижняя граница child не ниже нижней границы parent
    return childRect.top >= parentRect.top && childRect.bottom <= parentRect.bottom
        || childRect.top >= parentRect.top && childRect.top + 20 <= parentRect.bottom && childRect.bottom >= parentRect.top;
}