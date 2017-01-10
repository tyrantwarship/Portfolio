module PreviousWork exposing (main)

import Html exposing (div, text, ol, li, a, img, h3, p, span, h1, small, h5)
import Html.Attributes exposing (class, id, attribute, target, href, alt, src)


-- import Html.Events


main : Html.Html msg
main =
    div
        [ class "row previouswork-area text-center"
        , id "previouswork"
        ]
        [ h1 [ class "previouswork-header" ]
            [ text "Previous Work"
            , small [] [ text "See some of the projects I've worked on" ]
            ]
        , carouselView
        , h5 [ class "previouswork-tip" ] [ text "Note: Click for project page" ]
        ]


carouselView : Html.Html msg
carouselView =
    div [ class "container" ]
        [ div
            [ id "myCarousel"
            , class "carousel slide"
            , attribute "data-ride" "carousel"
            ]
            [ carouselIndicatorsView
            , carouselInnerView
            , carouselControlView "left" "prev" "Previous"
            , carouselControlView "right" "next" "Next"
            ]
        ]


carouselIndicatorsView : Html.Html msg
carouselIndicatorsView =
    ol [ class "carousel-indicators" ] <|
        List.map
            (\( className, slide ) ->
                li
                    [ attribute "data-target" "#myCarousel"
                    , attribute "data-slide-to" <| toString slide
                    , class className
                    ]
                    []
            )
            [ ( "active", 0 ), ( "", 1 ), ( "", 2 ), ( "", 3 ) ]


carouselInnerView : Html.Html msg
carouselInnerView =
    div
        [ class "carousel-inner"
        , attribute "role" "listbox"
        ]
    <|
        List.map (\carouselItem -> carouselItemView carouselItem) carouselItems


type alias CarouselItem =
    { className : String
    , hrefLink : String
    , imgAlt : String
    , imgSrc : String
    , titleText : String
    , descText : String
    }


carouselItems : List CarouselItem
carouselItems =
    [ CarouselItem "active simon-item" "http://tyrantwarship.github.io/FCC-SimonSays-Zipline" "simon-project" "https://raw.githubusercontent.com/tyrantwarship/FCC-SimonSays-Zipline/master/demo-first.png" "Simon Says" """Web application based on the timeless game, "Simon Says". Built with React and Sass."""
    , CarouselItem "wiki-item" "http://tyrantwarship.github.io/FCC-WikiSearch-Zipline" "wikipedia-project" "https://raw.githubusercontent.com/tyrantwarship/FCC-WikiSearch-Zipline/master/demo-first.png" "Wikipedia Searcher" "Search Wikipedia with this beautifully designed searcher. Implements the wikipedia API and built with Angular and Sass."
    , CarouselItem "recipe-item" "http://tyrantwarship.github.io/FCC-RecipeBox-Zipline" "recipebox-project" "https://raw.githubusercontent.com/tyrantwarship/FCC-RecipeBox-Zipline/master/preview1.png" "Recipe Box" "Keep track of all your recipes with this browser-memory persistent Recipe Box. Built with React and Sass."
    , CarouselItem "calc-item" "http://codepen.io/tyrantwarship/full/WreQyw/" "calculator-project" "https://raw.githubusercontent.com/tyrantwarship/FCC-Calculator-Zipline/master/preview.png" "Calculator" "Do mathetical calculations with whole or decimal values, on a visually pleasing calculator that works on all browsers. Built with Angular and Sass."
    ]


carouselItemView : CarouselItem -> Html.Html msg
carouselItemView { className, hrefLink, imgAlt, imgSrc, titleText, descText } =
    div [ class <| "item " ++ className ]
        [ a
            [ target "_blank"
            , href hrefLink
            ]
            [ img
                [ alt imgAlt
                , src imgSrc
                ]
                []
            , div [ class "carousel-caption caption-description" ]
                [ h3 [] [ text titleText ]
                , p [] [ text descText ]
                ]
            ]
        ]


carouselControlView : String -> String -> String -> Html.Html msg
carouselControlView direction dataSlide displayText =
    a
        [ class <| direction ++ " carousel-control"
        , href "#myCarousel"
        , attribute "role" "button"
        , attribute "data-slide" dataSlide
        ]
        [ span
            [ class <| "glyphicon glyphicon-chevron-" ++ direction
            , attribute "aria-hidden" "true"
            ]
            []
        , span [ class "sr-only" ] [ text displayText ]
        ]
