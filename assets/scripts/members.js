const memberinfo = [
    { member: "Rifting", discord: "", github: "rifting", website: "", role: "Current Member of Ethereal Workshop" },
    { member: "xmb9", discord: "988950574387068968", github: "xmb9", website: "https://archima.xyz", role: "Former Owner of Ethereal Workshop", color: "30cc74" },
    { member: "sophia", discord: "988950574387068968", github: "soap-phia", website: "https://soaphia.xyz", role: "Former Co-Owner of Ethereal Workshop", color: "ebaaee" },
    { member: "kxtz", discord: "952792525637312552", github: "kxtzownsu", website: "https://kxtz.dev", role: "Former Co-Owner of Ethereal Workshop" },
    { member: "Boeing 747", discord: "1037713379780993114", github: "notboeing747", website: "", role: "Former Member of Ethereal Workshop" },
    { member: "arbstro", discord: "1083909291091693708", github: "arbstro", website: "https://arb.arbstro.workers.dev/", role: "Former Member of Ethereal Workshop" },
    { member: "Writable", discord: "480818241145536513", github: "MunyDev", website: "", role: "Former Member of Ethereal Workshop" },
];
function mozzarellaReference(color, percentage) {
    const r = parseInt(color.slice(0, 2), 16);
    const g = parseInt(color.slice(2, 4), 16);
    const b = parseInt(color.slice(4, 6), 16);

    const blendedR = Math.round(r + (255 - r) * percentage).toString(16).padStart(2, "0");
    const blendedG = Math.round(g + (255 - g) * percentage).toString(16).padStart(2, "0");
    const blendedB = Math.round(b + (255 - b) * percentage).toString(16).padStart(2, "0");

    return `${blendedR}${blendedG}${blendedB}`;
}

function renderMembers(data) {
    const container = document.getElementById("members-container");
    container.innerHTML = "";

    data.forEach(({ member, discord, github, website, role, color }) => {
        const div = document.createElement("div");
        div.className = "member";

        const img = document.createElement("img");
        img.src = `https://github.com/${github}.png`;
        img.alt = member;
        img.className = "membericon";
        
        const basicallymozzarella = color ? mozzarellaReference(color, 0.5) : "FFFFFF"

        const h6Name = document.createElement("h6");
        h6Name.textContent = member;
        h6Name.style.color = `#${basicallymozzarella}`;

        const h6Role = document.createElement("h6");
        h6Role.textContent = role;
        h6Role.style.color = `#${basicallymozzarella}`;

        div.appendChild(img);
        div.appendChild(h6Name);
        div.appendChild(h6Role);

        if (github) {
            const githubLink = document.createElement("a");
            githubLink.href = `https://github.com/${github}`;
            githubLink.innerHTML = `<i style="color: #${basicallymozzarella}" class="fa-brands fa-github fa-sm"></i>`;
            div.appendChild(githubLink);
        }

        if (discord) {
            const discordLink = document.createElement("a");
            discordLink.href = `https://discord.com/users/${discord}`;
            discordLink.innerHTML = `<i style="color: #${basicallymozzarella}" class="fa-brands fa-discord fa-sm"></i>`;
            div.appendChild(discordLink);
        }

        if (website) {
            const websiteLink = document.createElement("a");
            websiteLink.href = `${website}`;
            websiteLink.innerHTML = `<i style="color: #${basicallymozzarella}" class="fa-solid fa-globe fa-sm"></i>`;
            div.appendChild(websiteLink);
        }

        container.appendChild(div);
    });
}

renderMembers(memberinfo);
