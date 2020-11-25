export interface RepairDevice {
  id?: Number;
  name: String;
  notes: String;
}

export interface UserDevice {
  id?: Number;
  category: String;
  model: String;
  serialNumber: String;
  Description: String;
  manufacturer: String;
  age: Number;
  defect: String;
  manual: Boolean;
  powersupply: Boolean;
  deliveryDay: Date;
  repairDeviceId: Number;
}

export interface RepairDocument {
  id?: Number;
  uri: String;
  repairDeviceId: Number;
}
