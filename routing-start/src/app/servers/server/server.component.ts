import {Component, OnInit} from '@angular/core';

import {ServersService} from '../servers.service';
import {ActivatedRoute, Data, Router} from "@angular/router";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
    server: { id: number, name: string, status: string } | undefined;

    constructor(private serversService: ServersService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        this.route.data
            .subscribe(
                (data: Data) => {
                    this.server = data['server'];
                }
            );
        // const serverId: number = +this.route.snapshot.params['id'];
        // this.server = this.serversService.getServer(serverId);
        // this.route.params.subscribe(
        //     (params: Params) => {
        //         const serverId: number = +params['id'];
        //         this.server = this.serversService.getServer(serverId);
        //     }
        // );
    }

    onEdit() {
        this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: "preserve"})
    }
}
