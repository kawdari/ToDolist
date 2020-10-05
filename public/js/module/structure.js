let text = document.querySelector('input');
let bouton = document.querySelectorAll('input')[1];
let ntaches;
let taches = document.querySelector('.taches');


let creation = (ntaches) => {
        /* icons */
        let iconCheck = document.createElement('i');
        iconCheck.className = "fa fa-check-circle";
        ntaches.appendChild(iconCheck);
        let iconEdit = document.createElement('i');
        iconEdit.className = "fa fa fa-sticky-note";
        ntaches.appendChild(iconEdit);
        let iconTrash = document.createElement('i');
        iconTrash.className = "fa fa-trash-alt";
        ntaches.appendChild(iconTrash);
        let yes =  document.createElement('i');
    
    
    // check

    iconCheck.addEventListener('click', () => {
        if (ntaches.className != "green") {
            ntaches.className = "green";
        } else if (ntaches.className = "green") {
            ntaches.className = "ntaches";
        }
    });


    // edit

    iconEdit.addEventListener('click', () => {

        let newEdit = document.createElement('input')
        newEdit.className = 'inputEdit'
        ntaches.appendChild(newEdit);
        
        iconCheck.setAttribute('class', 'invisible');
        iconEdit.setAttribute('class', 'invisible');
        iconTrash.setAttribute('class', 'invisible');

        let yes = document.createElement('i');
        yes.className = "fa fa-thumbs-up";
        ntaches.appendChild(yes);
        let no = document.createElement('i');
        no.className = "fa fa-times-circle";
        ntaches.appendChild(no);

        no.addEventListener('click', () => {
            ntaches.setAttribute('class', 'green');

            iconCheck.setAttribute('class', 'fa fa-check-circle');
            iconEdit.setAttribute('class', 'fa fa-sticky-note');
            iconTrash.setAttribute("class", "fa fa-trash");

            no.setAttribute('class', 'invisible');
            yes.setAttribute('class', 'invisible');
            newEdit.setAttribute('class', 'invisible');
        });

        yes.addEventListener('click', () => {
            ntaches.textContent = newEdit.value;

            ntaches.setAttribute('class', 'green');

            iconCheck.setAttribute("class", "fa fa-check-circle");
            iconEdit.setAttribute('class', 'fa fa-sticky-note');
            iconTrash.setAttribute('class', 'fa fa-trash');
           
            ntaches.appendChild(iconCheck);
            ntaches.appendChild(iconEdit);
            ntaches.appendChild(iconTrash);
           
        });

    });
    
    //trash 

    iconTrash.addEventListener('click', () => {
    
        ntaches.setAttribute('class', 'rouges');
        iconCheck.setAttribute('class', 'invisible');
        iconEdit.setAttribute('class', 'invisible');
        iconTrash.setAttribute('class', 'invisible');
    
        
        let yes = document.createElement('i');
        yes.className = "fa fa-thumbs-up";
        ntaches.appendChild(yes);
        let no = document.createElement('i');
        no.className = "fa fa-times-circle";
        ntaches.appendChild(no);
    
    
        no.addEventListener('click', () => {
            ntaches.className = "green";
            iconCheck.className = "fa fa-check-circle";
            iconEdit.className = "fa fa-sticky-note";
            iconTrash.className = "fa fa-trash";
            yes.className = 'invisible';
            no.className = 'invisible';
        });
        yes.addEventListener('click', () => {
            ntaches.remove();
        });
    });
};




/* rajouter taches dans des nouvelle div */
bouton.addEventListener('click', () => {

    if(text.value == ""){
        alert('veuillez remplir la case');
        } else {
    ntaches = document.createElement('div');
    taches.appendChild(ntaches);
    ntaches.className = 'ntaches';
    ntaches.textContent = text.value;
    text.value = "";
    console.log(text.value);

    creation(ntaches);
    }
});


/* filtre tu peux faire en css*/


let btnFaire = document.querySelectorAll('.btnn')[0];
let btnTerminer = document.querySelectorAll('.btnn')[1];
let btnTous = document.querySelectorAll('.btnn')[2];


btnFaire.addEventListener('click', () => {
    if (ntaches.className == 'ntaches') {
        ntaches.setAttribute('class', 'ntaches');
    } else if (ntaches.className == 'green') {
        ntaches.setAttribute('class', 'invisible');
    }
});

