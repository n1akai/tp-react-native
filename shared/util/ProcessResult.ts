export class ProcessResult {
  private _code: number;
  private _infos: string[] | null;
  private _warnings: string[] | null;
  private _errors: string[] | null;
  private _message: string | null;
  private _input: any;
  private _output: any;

  constructor();
  constructor(code: number);
  constructor(code: number, message: string);
  constructor(code?: number, message?: string) {
    this._code = code || 0;
    this._message = message || null;
    this._infos = null;
    this._warnings = null;
    this._errors = null;
    this._input = null;
    this._output = null;

    if (code !== undefined && message !== undefined) {
      if (code < 0) {
        this.errors.push(message);
      } else {
        this.infos.push(message);
      }
    }
  }

  // Getter and Setter for Code
  public get code(): number {
    return this._code;
  }

  public set code(value: number) {
    this._code = value;
  }

  // Getter and Setter for Infos
  public get infos(): string[] {
    if (this._infos === null) {
      this._infos = [];
    }
    return this._infos;
  }

  public set infos(value: string[]) {
    this._infos = value || [];
  }

  // Getter and Setter for Warnings
  public get warnings(): string[] {
    if (this._warnings === null) {
      this._warnings = [];
    }
    return this._warnings;
  }

  public set warnings(value: string[]) {
    this._warnings = value || [];
  }

  // Getter and Setter for Errors
  public get errors(): string[] {
    if (this._errors === null) {
      this._errors = [];
    }
    return this._errors;
  }

  public set errors(value: string[]) {
    this._errors = value || [];
  }

  // Getter and Setter for Message
  public get message(): string | null {
    return this._message;
  }

  public set message(value: string | null) {
    this._message = value;
  }

  // Getter and Setter for Input
  public get input(): any {
    return this._input;
  }

  public set input(value: any) {
    this._input = value;
  }

  // Getter and Setter for Output
  public get output(): any {
    return this._output;
  }

  public set output(value: any) {
    this._output = value;
  }
}
