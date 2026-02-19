export default function NewTripPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="font-display text-3xl font-semibold text-ink mb-2">Nouveau voyage</h1>
      <p className="text-stone mb-8">
        Ajoute les dates, la destination et tes liens (vols, Airbnb, Booking).
      </p>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-ink mb-1">Nom du voyage</label>
          <input
            type="text"
            placeholder="ex. Été en Grèce"
            className="w-full px-4 py-3 rounded-xl border border-sand bg-white focus:outline-none focus:ring-2 focus:ring-terracotta/30"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink mb-1">Destination</label>
          <input
            type="text"
            placeholder="ex. Santorini, Grèce"
            className="w-full px-4 py-3 rounded-xl border border-sand bg-white focus:outline-none focus:ring-2 focus:ring-terracotta/30"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-ink mb-1">Début</label>
            <input type="date" className="w-full px-4 py-3 rounded-xl border border-sand bg-white focus:outline-none focus:ring-2 focus:ring-terracotta/30" />
          </div>
          <div>
            <label className="block text-sm font-medium text-ink mb-1">Fin</label>
            <input type="date" className="w-full px-4 py-3 rounded-xl border border-sand bg-white focus:outline-none focus:ring-2 focus:ring-terracotta/30" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-ink mb-1">Liens (Booking, Airbnb, vols…)</label>
          <p className="text-sm text-stone mb-2">Tu pourras en ajouter plusieurs sur la page du voyage.</p>
          <input
            type="url"
            placeholder="https://..."
            className="w-full px-4 py-3 rounded-xl border border-sand bg-white focus:outline-none focus:ring-2 focus:ring-terracotta/30"
          />
        </div>
      </div>
      <button type="button" className="mt-8 w-full py-3 rounded-xl bg-terracotta text-white font-medium hover:bg-terracotta/90">
        Créer le voyage
      </button>
    </div>
  );
}
