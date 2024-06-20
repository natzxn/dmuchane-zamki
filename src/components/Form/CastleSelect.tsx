import React from 'react';
import { Select } from 'antd';
import { CastleOption } from './castleAvailability';

const { Option } = Select;

interface CastleSelectProps {
  selectedCastle: CastleOption | null;
  onChange: (value: CastleOption) => void;
}

const CastleSelect: React.FC<CastleSelectProps> = ({ selectedCastle, onChange }) => {
  return (
    <Select
      className="castle-option"
      placeholder="Wybierz rodzaj dmuchanej atrakcji"
      value={selectedCastle || undefined}
      onChange={(value) => {
        onChange(value as CastleOption);
      }}
    >
      <Option value="first-option">
        Nadmuchiwany zamek do skakania ze zjeżdżalnią
      </Option>
      <Option value="second-option">
        Nadmuchiwany plac zabaw park wodny
      </Option>
      <Option value="third-option">
        Wodny dmuchany zamek ze zjeżdżalnią
      </Option>
    </Select>
  );
};

export default CastleSelect;
