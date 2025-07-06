const memberinfo = [
    { member: "xmb9", discord: "988950574387068968", github: "xmb9", avatar: "https://cdn.discordapp.com/avatars/988950574387068968/478921fbfe4253b11c4d4b9dd2589b40.png?size=512", website: "https://archima.xyz", role: "Owner of Ethereal Workshop", color: "f9ed98" },
    { member: "Sophia", discord: "988950574387068968", github: "soap-phia", website: "https://soaphia.xyz", role: "Co-Owner of Ethereal Workshop", color: "ebaaee" },
    { member: "Evie", avatar: "https://cdn.discordapp.com/avatars/917886650951008276/93e87e23accf97eacdaced608048fac2.png?size=512", discord: "917886650951008276", github: "ac3gt", role: "Co-Owner of Ethereal Workshop", color: "ff00ff" },
    { member: "EpicDevices", discord: "1122725941651701891", github: "epic-devices", role: "Co-Owner of Ethereal Workshop", color: "ffffff" },
    { member: "Synaptic", discord: "405896057139232778", github: "Synaptic-1234", role: "Staff Member of Ethereal Workshop", color: "ffff00" },
    { member: "Bardex", avatar: "https://cdn.discordapp.com/avatars/1316554498734424145/2ef7aa324b5e615fb8d11a9c96e26c83.png?size=512", discord: "1316554498734424145", role: "Member of Ethereal Workshop", color: "1f344f" },
    { member: "Simon", github: "simpansoftware", discord: "1001820177731686500", role: "Member of Ethereal Workshop", color: "95c3fa" },
    { member: "kraeb", github: "dyinghynixmlc", avatar: "https://cdn.discordapp.com/avatars/721608676783423499/a0aa5583717895e0be3050d215eeda22.png?size=512", discord: "721608676783423499", role: "Member of Ethereal Workshop", color: "32CD32" },
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

    data.forEach(({ member, discord, github, website, role, color, avatar }) => {
        const div = document.createElement("div");
        div.className = "member";

        const img = document.createElement("img");
        img.src = `https://github.com/${github}.png`;
        if (avatar) {
            img.src = `${avatar}`;
        }
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
