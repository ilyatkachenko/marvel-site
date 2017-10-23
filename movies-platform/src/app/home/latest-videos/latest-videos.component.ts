import {Component, OnInit, HostListener, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';

@Component({
    selector: 'app-latest-videos',
    templateUrl: './latest-videos.component.html',
    styleUrls: ['./latest-videos.component.scss']
})

export class LatestVideosComponent implements OnInit {
    videos: any[] = [
        {
            id: 'https://www.youtube.com/embed/Ix6z-CaPeD8',
        },
        {
            id: 'https://www.youtube.com/embed/keJ3WUHIygI',
        },
        {
            id: 'https://www.youtube.com/embed/ssbC4y-hEFc',
        },
        {
            id: 'https://www.youtube.com/embed/UHYeswcUAVw',
        }
    ];

    constructor(@Inject(DOCUMENT) private document: Document) {
    }

    ngOnInit() {
        let video = document.getElementById('videos');
        let elements: any = video.getElementsByTagName("iframe");
        for (let i = 0; i < elements.length; ++i) {
            let videoWidth: number = elements[i].width;
            elements[i].style.height = videoWidth * 0.75;
        }

    }

    @HostListener("window:scroll", [])
    onWindowScroll() {
        let comicsOffset: number = document.getElementById('videos').offsetTop - 300;
        let elements: NodeListOf<Element> = document.getElementsByClassName("video");
        let numberScroll: number = window.pageYOffset;
        if (numberScroll > comicsOffset) {
            for (let i = 0; i < elements.length; ++i) {
                elements[i].classList.add('active');
            }
        }
    }
}


