<script lang="ts">
	import Socials from "../../Socials.svelte";
	import TextButton from "../../TextButton.svelte";
	import ResumeCard from "./ResumeCard.svelte";

  const today = new Date();
  
  const nineslicedStartDate = new Date('2024-11-01');
  const nineslicedMonths =
    (today.getFullYear() - nineslicedStartDate.getFullYear()) * 12 +
    (today.getMonth() - nineslicedStartDate.getMonth());
  const nineslicedDuration = `${nineslicedMonths}`;
</script>

<div class="w-full flex flex-col items-center">
    <div class="max-w-215 px-5 pt-6 pb-4 flex flex-col items-center text-center text-(--main-very-dark)">
    
		<h1 class="font-black text-4xl pb-4">Resume</h1>
        <p class="text-xl">
            <strong>Email:</strong> &#108eo&#64yo&#108woocl&#101&#46com<br>
            (responses may come from a different address)<br>
        </p>
        
        <h1 class="font-black text-4xl py-6">Experience</h1>
        <div class="flex flex-col gap-3">
            <ResumeCard
                title="Co-Founder"
                subtitle="Ninesliced · Toulouse, France"
                period="Nov 2024 - Present ({nineslicedDuration} months)"
                stickerImg="/assets/images/resume/ninesliced.png"
                stickerAlt="Ninesliced logo"
                stickerRound={true}
            >
                Co-founder, developer, and designer at <a href="https://ninesliced.com" class="card-link">Ninesliced</a>, a student-run game development band.
            </ResumeCard>

            <ResumeCard
                title="President of 7Fault"
                subtitle="ENSEEIHT · Toulouse, France"
                period="May 2026 - May 2027 (1 year)"
                stickerImg="/assets/images/resume/7fault.png"
                stickerAlt="7fault logo"
                stickerRound={true}
            >
                President of <a href="https://7fault.itch.io/" class="card-link">7Fault</a>, 
                ENSEEIHT's student game development club.
            </ResumeCard>

            <ResumeCard
                title="Godot Developer"
                subtitle="SMKS Studios · Remote"
                period="June 2026 - August 2026 (3 months)"
                stickerImg="/assets/images/resume/tota.png"
                stickerAlt="Tribe of the Accord logo"
                stickerRound={true}
            >
                Part-time Godot Developer for <a href="https://store.steampowered.com/app/2551790/Tribe_of_the_Accord/" class="card-link">Tribe of the Accord</a>, 
                an story-driven action-adventure game about a young huntress on a quest to rescue her father.
            </ResumeCard>

            <ResumeCard
                title="Entrepreneurship Summer Camp"
                subtitle="La Mêlée · Toulouse, France"
                period="June 2026 - July 2026 (1.5 months)"
                stickerImg="/assets/images/resume/lamelee.png"
                stickerAlt="La Mêlée logo"
                stickerRound={false}
            >
                Participant in the 2026 Entrepreneurship Internship Summer Camp by 
                <a href="https://lamelee.com/" class="card-link">La Mêlée</a>, where I developped my
                professional activity, met entrepreneurs and leaders, and was guided by mentors for 
                my projects.
            </ResumeCard>

            <ResumeCard
                title="Frontend Developer Intern"
                subtitle="Kinkotech · Shanghai, China"
                period="Jul 2025 - Aug 2025 (2 months)"
                stickerImg="/assets/images/resume/sorsa.png"
                stickerAlt="SORSA logo"
                stickerRound={true}
            >
                Frontend Vue 3 development at 
                <a href="https://kinkotec.com.cn" class="card-link">Kinkotech</a> in 
                the context of a summer internship program organised by <a href="https://www.china-sorsa.org/n195/n314/zjtxh/txhjj.html" class="card-link">SORSA Shanghai</a>.
            </ResumeCard>
            
            <ResumeCard
                title="Freelance Illustrator"
                subtitle="Remote"
                period="2025"
                
                stickerImg="/assets/images/resume/bladerush.png"
                stickerAlt="Blade Rush icon"
                stickerRound={false}
            >
                Worked for various clients as a freelance illustrator. 
                In particular, worked as an illustrator for <a href="https://store.steampowered.com/app/3238790/Blade_Rush/" class="card-link">Blade Rush</a>'s 
                promotional artwork.
            </ResumeCard>

            <ResumeCard
                title="Freelance Python developer"
                subtitle="Toulouse, Freelance"
                period="Nov 2024 - Jan 2025 (3 months)"

                stickerImg="/assets/images/resume/nextcord.png"
                stickerAlt="Nextcord logo"
                stickerRound={false}
            >
                Development of a Discord prototype bot for a client using Nextcord.
            </ResumeCard>
        </div>

        <h1 class="font-black text-4xl py-10 pb-6">Education</h1>
        <div class="flex flex-col gap-3">
            <ResumeCard
                title="ENSEEIHT"
                subtitle="Toulouse, France"
                period="2025 - Present"
                
                stickerImg="/assets/images/resume/enseeiht.png"
                stickerAlt="ENSEEIHT logo"
                stickerRound={false}
            >
                Engineering Degree, Computer Science (Sciences du Numérique)
            </ResumeCard>

            <ResumeCard
                title="University of Toulouse"
                subtitle="Toulouse, France"
                period="2023 - 2025"
                
                stickerImg="/assets/images/resume/utoulouse.png"
                stickerAlt="University of Toulouse logo"
                stickerRound={true}
            >
                Double Bachelor's Degree in Mathematics and Computer Science (MIDL)
            </ResumeCard>

            <ResumeCard
                title="Lycée du Parc"
                subtitle="Lyon, France"
                period="2022 - 2023"
                
                stickerImg="/assets/images/resume/lyceeduparc.png"
                stickerAlt="Lycée du Parc logo"
                stickerRound={false}
            >
                CPGE (Preparatory Classes for Grandes Ecoles) in MP2I (Mathematics, Physics, Engineering Science, and Computer Science)
            </ResumeCard>

            <ResumeCard
                title="Lycée Joffre"
                subtitle="Montpellier, France"
                period="2019 - 2022"
                
                stickerImg="/assets/images/resume/lyceejoffre.png"
                stickerAlt="Lycée Joffre logo"
                stickerRound={false}
            >
                High School Diploma (Baccalauréat) • Graduated with "Très Bien" mention
            </ResumeCard>
        </div>

        <h1 class="font-black text-4xl py-10 pb-6">Languages</h1>
        <div class="flex flex-row flex-wrap gap-3 justify-center">
            <div class="flex flex-row bg-white items-center gap-3 rounded-full px-5 p-2 shadow-[2px_8px_0px_var(--transp-shad)]">
                <strong>French</strong>
                Native
            </div>
            <div class="flex flex-row bg-white items-center gap-3 rounded-full px-5 p-2 shadow-[2px_8px_0px_var(--transp-shad)]">
                <strong>English</strong>
                Fluent, TOEFL 109/120
            </div>
            <div class="flex flex-row bg-white items-center gap-3 rounded-full px-5 p-2 shadow-[2px_8px_0px_var(--transp-shad)]">
                <strong>Mandarin</strong>
                Conversational, HSK Level 5
            </div>
            <div class="flex flex-row bg-white items-center gap-3 rounded-full px-5 p-2 shadow-[2px_8px_0px_var(--transp-shad)]">
                <strong>French Sign Language (LSF)</strong>
                Beginner
            </div>
            <div class="flex flex-row bg-white items-center gap-3 rounded-full px-5 p-2 shadow-[2px_8px_0px_var(--transp-shad)]">
                <strong>Japanese</strong>
                Beginner
            </div>
        </div>

        <h1 class="font-black text-4xl py-10 pb-6">Skills</h1>
        <div class="flex flex-row flex-wrap gap-3 justify-center">
            {#each [
                "Godot", 
                "Lua", 
                "LÖVE", 
                "Java", 
                "HTML/CSS/JS", 
                "Tailwind", 
                "Svelte", 
                "Python", 
                "Figma", 
                "Graphic design", 
                "Game design", 
                "Illustration", 
                "Web design", 
            ] as skill}
                <div class="bg-white items-center gap-3 rounded-full p-2 px-5 shadow-[2px_8px_0px_var(--transp-shad)]">
                    {skill}
                </div>
            {/each}
        </div>
        


        <!-- <h1 class="font-black text-4xl pt-10 pb-4">Resume</h1>
        <p class="text-2xl/10">
            TODO
        </p>
        <TextButton 
            --mainColor="var(--main-dark)"
            --secColor="var(--main-dark-shad)"
            --shadColor="var(--main-dark-shad)"
            --textColor="#fff"
            text="TODO"
        /> -->
    </div>
</div>

<style>
    strong {
        font-weight: 800;
    }
</style>