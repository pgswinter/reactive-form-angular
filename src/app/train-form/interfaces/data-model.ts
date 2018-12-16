import { plainToClass, Type } from 'class-transformer';

export class DataModel {
  @Type(() => ManagementUserMasterModel)
  public data?: ManagementUserMasterModel[];

  public static plainToClass(model: DataModel): DataModel {
    try {
      return plainToClass(DataModel, model);
    } catch (ex) {
      console.error('Could not transform DataModel object', ex);
    }
  }
}

export class ManagementUserMasterModel {
  public id?: number;
  public email?: string;
  public username?: string;
  public front_editor_name?: string;
  public group?: string;
  public operational?: string;
  public role_list?: string;
  public created_at?: string;
  public active?: number;
  public page?: number;
  // plug-in property
  public format_date?: string;

  @Type(() => ManagementUserMasterModelProfilePictureModel)
  public profile_picture?: ManagementUserMasterModelProfilePictureModel;

  @Type(() => ManagementUserMasterModelRoleModel)
  public roles?: ManagementUserMasterModelRoleModel[];

  public static plainToClass(model: ManagementUserMasterModel): ManagementUserMasterModel {
      try {
        return plainToClass(ManagementUserMasterModel, model);
      } catch (ex) {
        console.error('Could not transform ManagementUserMasterModel object', ex);
      }
  }
}

export class ManagementUserMasterModelProfilePictureModel {
  public url?: string;
  public static plainToClass(model: ManagementUserMasterModelProfilePictureModel): ManagementUserMasterModelProfilePictureModel {
    try {
      return plainToClass(ManagementUserMasterModelProfilePictureModel, model);
    } catch (ex) {
      console.error('Could not transform ManagementUserMasterModelProfilePictureModel object', ex);
    }
  }
}

export class ManagementUserMasterModelRoleModel {
  public id?: number;
  public role_name?: string;
  public order?: number;

  public static plainToClass(model: ManagementUserMasterModelRoleModel): ManagementUserMasterModelRoleModel {
    try {
      return plainToClass(ManagementUserMasterModelRoleModel, model);
    } catch (ex) {
      console.error('Could not transform ManagementUserMasterModelRoleModel object', ex);
    }
  }
}
