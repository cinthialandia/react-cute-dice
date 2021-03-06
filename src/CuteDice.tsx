import React, { useEffect } from 'react';
import ControlledCuteDice from './ControlledCuteDice';
import { Colors, DiceValues } from './types';
import { useCuteDice } from './useCuteDice';

interface Props {
  onChange: (value: DiceValues, rolling: boolean) => void;
  disabled?: boolean;
  colors?: Colors;
  className?: string;
}

const CuteDice: React.FC<Props> = ({ onChange, disabled = false, colors = {} as Colors, className = '' }) => {
  const { value, isRolling, throwDice } = useCuteDice();

  useEffect(() => {
    onChange(value, isRolling);
  }, [isRolling, value, onChange]);

  return <ControlledCuteDice value={value} disabled={disabled || isRolling} onClick={throwDice} colors={colors} className={className} />;
};

export default CuteDice;
