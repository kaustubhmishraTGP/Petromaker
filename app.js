function goLogin(){
window.location="login.html"
}

function goWizard(){
window.location="wizard.html"
}

function askDomain(){
document.getElementById("domainQuestion").style.display="block"
}

function domainYes(){
document.getElementById("domainInput").style.display="block"
}

function domainNo(){
startInstall()
}

function startInstall(){
window.location="progress.html"
}
