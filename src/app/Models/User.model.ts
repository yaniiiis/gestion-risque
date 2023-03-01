export class User {
    protected nom:string
    protected prenom:string
    protected email:string
    protected token:string
    protected role:{name:string}
    protected RoleData:{}
    protected permissions:[string]

    constructor (userData:userData) {
        this.nom = userData.nom
        this.prenom = userData.prenom
        this.email = userData.email
        this.token = userData.token
        this.role = userData.roles
        this.permissions = userData.permissions
    }

    /**
     * getName
     */
    public getNom():string {
        return this.nom
    }

    /**
     * getRole
     */
    public getRole(): Object {
        return this.role
    }

    public getRoleName(): string {
        return this.role.name
    }

    /**
     * getPermissions
     */
    public getPermissions() {
        return this.permissions
    }

    public hasRole(role:string): boolean {
        role = String(role).toLowerCase();
        return   this.getRoleName().toLowerCase() === role;
   
    }

    public hasPermission(permission:string): boolean {
        permission = String(permission).toLowerCase()
        return String(this.getPermissions()).toLowerCase().includes(permission)
        
    }
}


interface userData {
    nom:string,
    prenom:string,
    email:string,
    token:string,
    roles?:{name:string},
    permissions:[string]
}