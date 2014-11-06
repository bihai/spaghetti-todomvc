declare class Spaghetti {
    /**
     * Returns the module version.
     */
    public static getModuleVersion():string;

    /**
     * Returns the Spaghetti version used to build the module.
     */
    public static getSpaghettiVersion():string;

    /**
   	 * Returns the name of the module.
   	 */
    public static getModuleName():string;

    /**
   	 * Returns a URL pointing to this module's given resource.
   	 */
    public static getResourceUrl(resource:string):string;
}
