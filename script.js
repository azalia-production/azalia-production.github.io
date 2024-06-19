
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
    return childRect.top + 55 >= parentRect.top && childRect.bottom <= parentRect.bottom
        || childRect.top >= parentRect.top && childRect.top + 55 <= parentRect.bottom && childRect.bottom >= parentRect.top;
}

const svgMain = document.querySelector('.tales__title');
const svgElements = document.querySelectorAll('.tales__title .cls-1');

window.addEventListener('scroll', function () {
    const svgPos = svgMain.getBoundingClientRect();
    const winHeight = window.innerHeight;
    let i = 0;
    console.log(winHeight + ' ' + svgPos.top)
    svgElements.forEach( (el) => {
        el.style.opacity = (winHeight + (500 - svgPos.top )*2  + i % 10 * 100) / winHeight;
        i++;
    })
})