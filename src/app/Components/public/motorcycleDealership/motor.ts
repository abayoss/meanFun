export interface Motor {
  id?: string;
  model: string;
  type?: string;
  image?: string;
  details: string;
  technicalDetails: {
    DISPLACEMENT: string;
    POWERINHP: string;
    POWERINKW: string;
    TORQUE: string;
    DESIGN: string;
    STROKE: string;
  };
}
