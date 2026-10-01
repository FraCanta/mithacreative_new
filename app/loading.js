export default function Loading() {
  return (
    <div className="route-loading" role="status" aria-label="Caricamento pagina">
      <div className="route-skeleton" aria-hidden="true">
        <div className="route-skeleton__copy">
          <span className="route-skeleton__eyebrow" />
          <span className="route-skeleton__title" />
          <span className="route-skeleton__title route-skeleton__title--short" />
          <span className="route-skeleton__text" />
          <span className="route-skeleton__text route-skeleton__text--short" />
          <span className="route-skeleton__button" />
        </div>
        <div className="route-skeleton__visual" />
      </div>
      <span className="sr-only">Caricamento pagina</span>
    </div>
  );
}
