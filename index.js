const credits = document.querySelector('.credits');

credits.addEventListener('click', ()=> {
    const creditsDialog = document.createElement('dialog');
    creditsDialog.classList.add('credits-dialog');

    const creditsHeader = document.createElement('div');
    creditsHeader.classList.add('credits-header');

    const dialogTitle = document.createElement('h3');
    dialogTitle.textContent = 'Credits';

    const dialogCloseButton = document.createElement('button');
    dialogCloseButton.classList.add('credits-close-button');
    dialogCloseButton.textContent = 'Close';
    dialogCloseButton.addEventListener('click', ()=>{
        creditsDialog.close();
        document.body.removeChild(creditsDialog);
    });

    creditsHeader.append(dialogTitle, dialogCloseButton);

    const dialogText = document.createElement('p');
    dialogText.textContent = `All avatars were obtained from FlatIcon and all icons were
        obtained from Material Design Icons. All rights reserved to their respective
        owners.`
    creditsDialog.append(creditsHeader, dialogText);

    document.body.appendChild(creditsDialog);
    creditsDialog.showModal();
});