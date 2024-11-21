const form = document.getElementById("resumeform") as HTMLFormElement;
const resumePage = document.getElementById("resumepage") as HTMLElement;
const resumePhoto = document.getElementById("resume-Photo") as HTMLImageElement;
const resumeName = document.getElementById("resume-name") as HTMLHeadingElement;
const resumeNamee = document.getElementById("resumename") as HTMLParagraphElement;
const resumeGender = document.getElementById("resumegender") as HTMLParagraphElement;
const resumeEmail = document.getElementById("resumeemail") as HTMLParagraphElement;
const resumePhone = document.getElementById("resumephone") as HTMLParagraphElement;
const resumeEducation = document.getElementById("resumedegree") as HTMLParagraphElement;
const resumeSchool = document.getElementById("resumeschool") as HTMLParagraphElement;
const resumeWorkExperience = document.getElementById("resumeworkexperience") as HTMLParagraphElement;
const resumeSkills = document.getElementById("resumeskills") as HTMLParagraphElement;
const editButton = document.getElementById("editButton") as HTMLButtonElement;
const backButton = document.getElementById("backButton") as HTMLButtonElement;
const shareLinkButton = document.getElementById("shareLinkButton") as HTMLButtonElement;
const downloadPdfButton = document.getElementById("download.pdf") as HTMLButtonElement;
const resumeContent = document.getElementById("resume-content") as HTMLDivElement;
const container = document.getElementById("container") as HTMLDivElement

form.addEventListener("submit", async (event:Event) => {
    event.preventDefault()


const name1 = (document.getElementById("name") as HTMLInputElement).value;
const gender = (document.getElementById("gender") as HTMLInputElement).value;
const email = (document.getElementById("email") as HTMLInputElement).value;
const phone = (document.getElementById("phone") as HTMLInputElement).value;
const degree = (document.getElementById("degree") as HTMLInputElement).value;
const school = (document.getElementById("school") as HTMLInputElement).value;
const skills = (document.getElementById("skills") as HTMLInputElement).value;
const experience = (document.getElementById("work experience") as HTMLInputElement).value;
const photoInput = document.getElementById("photo") as HTMLInputElement;
const container = document.getElementById("container") as HTMLDivElement;

if(container.style.display="flex"){
    container.style.display="none";
}
const photofile =  photoInput.files? photoInput.files[0]:null;

let photoBase64 = '';

if(photofile){
    photoBase64 = await fileToBase64(photofile);

    localStorage.setItem("resume-Photo" , photoBase64)
    resumePhoto.src = photoBase64;0 
}

document.querySelector("container")?.classList.add('hidden');
resumePage.classList.remove("hidden");

resumeNamee.textContent = name1;
resumeGender.textContent = gender;
resumeEmail.textContent = `Email: ${email}`;
resumePhone.textContent = `phone: ${phone}`;
resumeEducation.textContent = `${degree} from ${degree}`;
resumeSchool.textContent = `${degree} from ${school}`;
resumeSkills.textContent = skills;
resumeWorkExperience.textContent = experience;
})


function fileToBase64(file: File):Promise<string> {
    return new Promise((resolve,reject) => {
        const reader = new FileReader();

        reader.onloadend=()=>resolve(
            reader.result as string
        )
        reader.onerror = reject;
        reader.readAsDataURL(file);
    }
)}
