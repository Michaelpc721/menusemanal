const commitFamilyName = target => {
  const key = target.dataset.familyKey;
  if (!key) return;
  const value = String(target.value || '').trim();
  familyNames[key] = value || FAMILY_NAME_DEFAULTS[key] || key;
  saveFamilyNames();
  renderDays();
  if (state.dayModalOpen) renderDayModal();
  renderCosts();
};

shoppingSection.querySelectorAll('[data-family-key]').forEach(input => {
  input.addEventListener('change', e => commitFamilyName(e.target));
  input.addEventListener('blur', e => commitFamilyName(e.target));
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.target.blur();
    }
  });
});

const commitPriceField = target => {
  const name = target.dataset.priceName;
  const field = target.dataset.field;
  if (!name || !field) return;

  const current = Object.assign({}, getPriceRecord(name));
  current[field] = field === 'unitLabel' ? String(target.value || '').trim() : Number(target.value);

  if (field !== 'unitLabel' && !Number.isFinite(current[field])) {
    current[field] = field === 'factor' ? 1 : 0;
  }
  if (field === 'factor' && current[field] <= 0) current[field] = 1;
  if (field === 'unitLabel' && !current[field]) {
    current[field] = getPriceRecord(name).unitLabel || 'kg';
  }

  priceDB[name] = current;
  savePriceDB();
  renderCosts();
};

shoppingSection.querySelectorAll('[data-price-name]').forEach(input => {
  input.addEventListener('change', e => commitPriceField(e.target));
  input.addEventListener('blur', e => commitPriceField(e.target));
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.target.blur();
    }
  });
});
