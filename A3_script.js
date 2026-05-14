
        // ===============================\\
                //SIDEBARS
        // ===============================\\
        function toggleSidebar() {
            const sidebar = document.getElementById("sidebar");
            sidebar.classList.toggle("open");
        }

        function toggleSettings() {
            document.getElementById("settingsPanel").classList.toggle("open");
        }


        // ===============================\\
                    //LOS TEMAS
         // ===============================\\

        function setTheme(theme) {
            document.body.className = theme;
            const header = document.querySelector("header");
            if (header) {
                header.className = `header ${theme}`;
            }
            

            localStorage.setItem('selectedTheme', theme);
        }

        document.addEventListener("DOMContentLoaded", () => {
            const savedTheme = localStorage.getItem('selectedTheme');


            if (savedTheme) {
                setTheme(savedTheme);
            }
        });

        // ===============================\\
                //NAVEGACION
        // ===============================\\

        const items = document.querySelectorAll('.menu-item');

        items.forEach(item => {
            item.addEventListener('click', () => {
                const texto = item.innerText.toLowerCase();

                if (texto.includes('kana')) {
                    window.location.href = 'J1_kanastudy.html';
                } else if (texto.includes('qui')) {
                    window.location.href = 'LA1_whoIam.html';
                }   else if (texto.includes('kanji')) {
                    window.location.href = 'K1_kanjiStudy.html';
                }
            });
        });
