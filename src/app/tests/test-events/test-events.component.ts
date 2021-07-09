import { Component, OnInit } from '@angular/core';
import { APACSStabService } from "../../services/APACS-stab.service";

@Component({
  selector: 'app-test-events',
  templateUrl: './test-events.component.html',
  styleUrls: ['./test-events.component.scss']
})
export class TestEventsComponent implements OnInit {

  constructor(private api: APACSStabService) { }

  CallbackMain() {
    let sdk2CoreSubParam = {
      "eventTypes": "*",
      "objTypes": "*",
      "srvStates": true,
      "srvStates_stillOnline": true,
      "localEventBuffer": 1000
    }

    this.api.subSdkToEvents(sdk2CoreSubParam).subscribe();
    let webhookSettings = {
      "url_events": "http://localhost:7112/webhook",
      "url_notifies": "http://localhost:7112/webhook",
      "url_states": "http://localhost:7112/webhook",
      "replyTO": 1000
    }
    this.api.webhooKEventSubscribe(webhookSettings).subscribe(value => console.log(value));
  }

  ngOnInit(): void {
  }

}
