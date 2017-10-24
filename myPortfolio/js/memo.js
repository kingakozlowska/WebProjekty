/**
 * Created by mac on 17/07/2017.
 */

// // Kinga Kozłowska 2017
// // obiekt notatka(memo) z metodami
//
// // (function () {
// //     'use strict';
//
//     function Memo() {
//         //zmienne
//         var elementMemo, // zmienna w ktorej bedziemy przechowywac uchwyt do wybranego memo
//             positionX,
//             positionY;
//
//         //funkcje
//         var onDragStart,
//             onDrag,
//             onDragEnd;
//
//
//
// //
//         onDragStart = function (event) {
//             var boundingClientRect;
//             if (event.target.className.indexOf('bar') === -1) {
//                 return;
//             }
//
//             elementMemo = this;
//             boundingClientRect = elementMemo.getBoundingClientRect(); // pozycja kursora
//
//             positionY = boundingClientRect.top - event.clientY;
//             positionX = boundingClientRect.left - event.clientX;
//         };
// //
//         onDrag = function (event) {
//             if (!elementMemo) {
//                 return;
//             }
//
//             var localPositionX = event.clientX + positionX,
//                 localPositionY = event.clientY + positionY;
//
//             // zapobieganie wychodzneia za krawedz lewa i gore
//             if (localPositionX < 0) {
//                 localPositionX = 0;
//             }
//
//             if (localPositionY < 0) {
//                 localPositionY = 0;
//             }
//
//             elementMemo.style.transform = "translateX(" + localPositionX + "px) translateY(" + localPositionY + "px)";
//         };
// //
//         onDragEnd = function () {
//             elementMemo = null;
//             positionX = null;
//             positionY = null;
//         };
//
//         this.createMemo = function(X, Y, width, height) {
//             var newDiv,
//                 newBar,
//                 newTextarea;
//             //positionNewMemo;
//
//             newDiv = document.createElement('div');
//             newBar = document.createElement('div');
//             newTextarea = document.createElement('textarea');
//
//             // ustawiamy style pozycja i szer, wys
//             newDiv.style.transform = "translateX(" + X + "px) translateY(" + Y + "px)";
//             newDiv.style.width = width;
//             newDiv.style.height = height;
//             newTextarea.style.width = width;
//             newTextarea.style.height = height;
//
//             newBar.classList.add('bar');
//             newDiv.classList.add('memo');
//
//
//             newDiv.appendChild(newBar);
//             newDiv.appendChild(newTextarea);
//             //var X = Math.random() * 500;
//             //var Y = Math.random() * 500;
//
//
//
//             //document.querySelector('.memo')
//             newDiv.addEventListener('mousedown', onDragStart, false);
//
//             document.body.appendChild(newDiv);
//         };
//
//
//         //document.querySelector('.memo').addEventListener('mousedown', onDragStart, false);
//         document.querySelector('.memo').addEventListener('mousemove', onDrag, false);
//         document.querySelector('.memo').addEventListener('mouseup', onDragEnd, false);
//
//     }
//
//     var pages = new Memo;
//     var sketches = new Memo;
//     var handMade = new Memo;
//
//     pages.createMemo(10, 100, "400px", "100px");
//     sketches.createMemo(420, 100, "400px", "100px");
//     handMade.createMemo(830, 100, "400px", "100px");
//
// // })();
//
// // funkcja tworzaca nowe memo ( pozycja X , pozycja Y, szerokosc memo, wysokosc memo
//

(function () {
    'use strict';

    function Memo() {

        var elementMemo,
            onDragStart,
            onDrag,
            onDragEnd,
            positionY,
            positionX,
            createMemo,
            addNoteBtnEl;

        onDragStart = function (event) {
            var boundingClientRect;
            if (event.target.className.indexOf('bar') === -1) {
                return;
            }

            elementMemo = this;

            boundingClientRect = elementMemo.getBoundingClientRect();

            positionY = boundingClientRect.top - event.clientY;
            positionX = boundingClientRect.left - event.clientX;
        };

        onDrag = function (event) {
            if (!elementMemo) {
                return;
            }

            var posX = event.clientX + positionX,
                posY = event.clientY + positionY;

            if (posX < 0) {
                posX = 0;
            }

            if (posY < 0) {
                posY = 0;
            }

            elementMemo.style.transform = "translateX(" + posX + "px) translateY(" + posY + "px)";
        };

        onDragEnd = function () {
            elementMemo = null;
            positionX = null;
            positionY = null;
        };

        createMemo = function (X, Y, width, height, content) {
            var elementMemo = document.createElement('div'),
                elementBar = document.createElement('div');


            // ustawiamy style pozycja i szer, wys
            elementMemo.style.transform = "translateX(" + X + "px) translateY(" + Y + "px)";
            elementMemo.style.width = width;
            elementMemo.style.height = height;
            // elementMemo.style.zIndex = 0;


            if(content){
                var elementContent = document.createElement('figure');
                //elementContent.style.width = width;
                //elementContent.style.height = height;
                elementContent.innerHTML=content;
            }
            else{
                var elementTextarea = document.createElement('textarea');
                elementTextarea.style.width = width;
                elementTextarea.style.height = height;
            }

            elementBar.classList.add('bar');
            elementMemo.classList.add('memo');

            elementMemo.appendChild(elementBar);

            if(content) {
                elementContent.classList.add('content');
                elementMemo.appendChild(elementContent);
            }
            else
            {
                elementMemo.appendChild(elementTextarea);
            }

            elementMemo.addEventListener('mousedown', onDragStart, false);

            document.body.appendChild(elementMemo);
        };

        //creatMemo(X, Y, szerokosc, wysokosc)
        // createMemo(410, 10, "400px", "180px",'<img src="kingaportfolio.png" class="mylogo" alt="Kinga Kozłowska - portfolio" style="width: 320px; box-sizing: border-box"  >');

        createMemo(100, 250, "300px", "200px");
        createMemo(410, 250, "300px", "200px");
        createMemo(820, 250, "350px", "200px");

        createMemo(100, 460, "450px", "200px");
        createMemo(560, 460, "400px", "200px");
        createMemo(970, 460, "200px", "200px");


        addNoteBtnEl = document.querySelector('.addNoteBtn');
        addNoteBtnEl.addEventListener('click', createMemo, false);
        document.addEventListener('mousemove', onDrag, false);
        document.addEventListener('mouseup', onDragEnd, false);
    }

    Memo();
})();
