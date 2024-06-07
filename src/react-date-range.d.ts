declare module 'react-date-range' {
    import { ComponentType } from 'react';
  
    export interface Range {
      startDate: Date;
      endDate: Date | null | undefined;
      key: string;
    }
  
    export interface RangeKeyDict {
      [key: string]: Range;
    }
  
    export interface DateRangePickerProps {
      onChange: (ranges: RangeKeyDict) => void;
      showSelectionPreview?: boolean;
      moveRangeOnFirstSelection?: boolean;
      ranges: Range[];
      direction?: 'vertical' | 'horizontal';
    }
  
    export const DateRange: ComponentType<DateRangeProps>;
  }
  