import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  DagreNodesOnlyLayout,
  Layout,
  NgxGraphModule,
} from '@swimlane/ngx-graph';
import * as shape from 'd3-shape';
import { customNodeConfig, links, nodes } from './graph.data';

@Component({
  selector: 'app-game-map',
  standalone: true,
  imports: [CommonModule, NgxGraphModule],
  templateUrl: './game-map.component.html',
  styleUrls: ['./game-map.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)',
  },
})
export class GameMapComponent implements OnInit {
  public curve: any = shape.curveLinear;
  public layout: Layout = new DagreNodesOnlyLayout();

  public layoutSettings = {
    orientation: 'TB',
  };
  viewSizeCustom = {
    w: window.innerWidth,
    h: window.innerHeight,
  };

  nodes = nodes;
  customNodeConfig = customNodeConfig;
  links = links;
  selectedNodes: Set<string> = new Set();
  selectedLabels: string[] = [];

  ngOnInit(): void {}

  onNodeClick(nodeClicked: any) {
    const foundIndex = this.nodes.findIndex((x) => x.id == nodeClicked.id);
    this.nodes[foundIndex].clicked.isActive =
      !this.nodes[foundIndex].clicked.isActive;

    if (this.selectedNodes.has(nodeClicked.id)) {
      this.selectedNodes.delete(nodeClicked.id);
    } else {
      this.selectedNodes.add(nodeClicked.id);
    }
    this.selectedLabels = this.getSelectedNodeLabels();

    this.updateLinkColors();
    this.links = [...this.links]; // this will break drag&drop :(
  }

  updateLinkColors() {
    this.links.forEach((link) => {
      debugger;
      link.isSelected =
        this.selectedNodes.has(link.source) &&
        this.selectedNodes.has(link.target);
    });
  }

  getSelectedNodeLabels(): string[] {
    const labels: string[] = [];
    this.selectedNodes.forEach((nodeId) => {
      const node = this.nodes.find((n) => n.id === nodeId);
      if (node) {
        labels.push(node.label);
      }
    });

    return labels;
  }

  onResize(event: any) {
    this.viewSizeCustom.w = event.target.innerWidth;
    this.viewSizeCustom.h = event.target.innerHeight;
  }
}
