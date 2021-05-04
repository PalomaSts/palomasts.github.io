const reposToIgnore = ['PalomaSts/livro-receitas'];

function changeLanguage(language = 'pt') {

    switch (language) {
        case 'pt': {
            const bio = document.getElementById('bio');
            bio.innerHTML = `Estudante de Análise e Desenvolvimento de Sistemas proativa e empenhada, devido as minhas experiências profissionais e universitárias desenvolvi boa comunicação, organização, senso de urgência e bom desempenho nos trabalhos em equipe. 
            Atualmente sou estagiária na área de desenvolvimento, atuando principalmente na manutenção do site do Porto de Santos.`

            const skills = document.getElementById('skillTitle')
            skills.innerHTML = `HABILIDADES`

            const project = document.getElementById('projectTitle')
            project.innerHTML = `PROJETOS`

            break;
        }
        case 'es': {
            const bio = document.getElementById('bio');
            bio.innerHTML = `Estudiante proactivo y comprometido de Análisis y Desarrollo de Sistemas, debido a mi experiencia profesional y universitaria desarrollé buena comunicación, organización, sentido de urgencia y buen desempeño en el trabajo en equipo.
            Actualmente soy pasante en el área de desarrollo, trabajando principalmente en el mantenimiento del sitio web del Puerto de Santos.`

            const skills = document.getElementById('skillTitle')
            skills.innerHTML = `HABILIDADES`

            const project = document.getElementById('projectTitle')
            project.innerHTML = `PROYECTOS`

            break;
        }
        case 'en': {
            const bio = document.getElementById('bio');
            bio.innerHTML = `Proactive and committed Systems Analysis and Development student, due to my professional and university experiences I developed good communication, organization, sense of urgency and good performance in teamwork.
            I am currently an intern in the development area, working mainly in the maintenance of the Port of Santos website.`

            const skills = document.getElementById('skillTitle')
            skills.innerHTML = `SKILLS`

            const project = document.getElementById('projectTitle')
            project.innerHTML = `PROJECTS`
            break;
        }
        default: {
            console.log('Opção invalida!');
        }
    }
}


const listComponents = data => {
    return data.map((repo) => {
        return (`
         <div  ${Math.floor(Math.random() * 10) % 2 === 0 ? 'data-aos="flip-right"' : 'data-aos="flip-left"' } class="project" alt="One of my project and they description">
             <a class="repoUrl" href="${repo.html_url}" target="blank" id="projectTitle">${repo.full_name}</a>
             <p id="description">${repo.description}</p>
             <span id="language">${repo.language ? repo.language : ' - '}</span>
         </div>
         `)
    }).join('')
}

function getRepository() {
    const header = new Headers({
        'User-agent': 'Mozilla/4.0 Custom User Agent'
    })
    fetch('https://api.github.com/users/PalomaSts/repos', header)
        .then(response => response.json())
        .then(data => {
            const repos = data.filter(repo => {
                console.log(reposToIgnore)
                return  reposToIgnore.includes(repo.full_name) ? '' : repo.full_name ;

            })

            const reposDiv = document.getElementById('allProjects');
            reposDiv.innerHTML = listComponents(repos)
        })

}
