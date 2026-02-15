import instagram from "@/assets/instagram.svg";
import github from "@/assets/github.svg";
import linkedIn from "@/assets/linkedIn.svg";
import gmail from "@/assets/gmail.svg";

const socials = [
  {
    id: 1,
    red: "Instagram",
    link: "https://www.instagram.com/itscamperezb/",
    logo: instagram,
  },
  {
    id: 2,
    red: "LinkedIn",
    link: "https://www.linkedin.com/in/camilo-andr%C3%A9s-p%C3%A9rez-barraza-b601b31b6/",
    logo: linkedIn,
  },
  {
    id: 3,
    red: "GitHub",
    link: "https://github.com/itscamperezb",
    logo: github,
  },
  {
    id: 4,
    red: "camilopb0405@gmail.com",
    link: "camilopb0405@gmail.com",
    logo: gmail,
  },
];
export default function Contact() {
  return (
    <div>
      <ul className="flex justify-around w-[80%] place-self-center p-10 max-sm:flex-col gap-4">
        {socials.map((item) => {
          return (
            <li key={item.id} className="flex flex-col items-center gap-2">
              <a href={item.link}>
                <img className="h-15" src={item.logo}></img>
              </a>
              <p className="text-white">{item.red}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
