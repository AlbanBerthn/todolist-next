"use client";
import { useRouter } from "next/navigation";
import "./page.scss";

export default function Page() {
  const router = useRouter();
  function handleClick() {
    router.push("/Task");
  }
  return (
    <div className="presentation">
      <h3 className="presentation__title">
        Marre d&apos;être tête en l&apos;air ?
      </h3>
      <p className="presentation__description">
        Le but de notre site est de permettre a tout personne d&apos;acceder
        facilement <br />
        et de n&apos;importe ou a sa liste de tache a faire afin de ne rien
        oublier. <br />
        <br />
        Il est également possible de faire sa liste de courses avec les
        quantités désirés pour chaques élement de cette liste. <br />
        <br />
        Alors n&apos;hésiter plus, cliquer sur l&apos;onglet tâche, rentrer vos
        tâches et a vous la liberté et la possibilité de temporairements les
        oubliers.
        <br />
        <br />
        Notre site y pensera pour vous !
      </p>

      <button className="presentation__button" onClick={handleClick}>
        Je créer ma première tache !!
      </button>
    </div>
  );
}
