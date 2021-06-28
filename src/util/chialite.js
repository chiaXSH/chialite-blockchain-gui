const Big = require('big.js');
const units = require('./units');

// TODO: use bigint instead of float
const convert = (amount, from, to) => {
  if (Number.isNaN(Number.parseFloat(amount)) || !Number.isFinite(amount)) {
    return 0;
  }

  const amountInFromUnit = Big(amount).times(units.getUnit(from));

  return Number.parseFloat(amountInFromUnit.div(units.getUnit(to)));
};

class Chialite {
  constructor(value, unit) {
    this._value = value;
    this._unit = unit;
  }

  to(newUnit) {
    this._value = convert(this._value, this._unit, newUnit);
    this._unit = newUnit;

    return this;
  }

  value() {
    return this._value;
  }

  format() {
    const displayUnit = units.getDisplay(this._unit);

    const { format, fractionDigits, trailing } = displayUnit;

    let options = { maximumFractionDigits: fractionDigits };

    if (trailing) {
      options = { minimumFractionDigits: fractionDigits };
    }

    let value;

    if (fractionDigits !== undefined) {
      const fractionPower = Big(10).pow(fractionDigits);
      value = Number.parseFloat(
        Big(Math.floor(Big(this._value).times(fractionPower))).div(
          fractionPower,
        ),
      );
    } else {
      value = this._value;
    }

    let formatted = format.replace(
      '{amount}',
      Number.parseFloat(value).toLocaleString(undefined, options),
    );

    if (displayUnit.pluralize && this._value !== 1) {
      formatted += 's';
    }

    return formatted;
  }

  toString() {
    const displayUnit = units.getDisplay(this._unit);
    const { fractionDigits } = displayUnit;
    const options = { maximumFractionDigits: fractionDigits };
    return Number.parseFloat(this._value).toLocaleString(undefined, options);
  }
}

export const chialite_formatter = (value, unit) => new Chialite(value, unit);

chialite_formatter.convert = convert;
chialite_formatter.setDisplay = units.setDisplay;
chialite_formatter.setUnit = units.setUnit;
chialite_formatter.getUnit = units.getUnit;
chialite_formatter.setFiat = (currency, rate, display = null) => {
  units.setUnit(currency, 1 / rate, display);
};

export const mojo_to_chialite = (mojo) => {
  return chialite_formatter(Number.parseInt(mojo), 'mojo').to('chialite').value();
};

export const chialite_to_mojo = (chialite) => {
  return chialite_formatter(Number.parseFloat(Number(chialite)), 'chialite')
    .to('mojo')
    .value();
};

export const mojo_to_chialite_string = (mojo) => {
  return chialite_formatter(Number(mojo), 'mojo').to('chialite').toString();
};

export const mojo_to_colouredcoin = (mojo) => {
  return chialite_formatter(Number.parseInt(mojo), 'mojo')
    .to('colouredcoin')
    .value();
};

export const colouredcoin_to_mojo = (colouredcoin) => {
  return chialite_formatter(Number.parseFloat(Number(colouredcoin)), 'colouredcoin')
    .to('mojo')
    .value();
};

export const mojo_to_colouredcoin_string = (mojo) => {
  return chialite_formatter(Number(mojo), 'mojo').to('colouredcoin').toString();
};
